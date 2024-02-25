import React, { useState, useEffect, FC } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: true,
  lineNumbers: "on",
  scrollBeyondLastLine: false,
  theme: "hc-light",
};

type LiveCodeProps = {
  initialValue?: string;
  renderNow?: boolean;
};

const LiveCode: FC<LiveCodeProps> = ({
  initialValue = ``,
  renderNow = false,
}) => {
  const [code, setCode] = useState<string>(initialValue);
  const [output, setOutput] = useState<string>("");
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (renderNow) {
      executeCode(initialValue);
    }
  }, []);

  const captureLogs = (fn: () => void) => {
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      setLogs((prevLogs: string[]) => [
        ...prevLogs,
        ...args.map((arg) =>
          typeof arg === "object"
            ? JSON.stringify(arg, null, 2)
            : arg.toString()
        ),
      ]);
      originalConsoleLog.apply(console, args);
    };

    fn();

    console.log = originalConsoleLog; // Restore original console.log after execution
  };

  const executeCode = (currentCode: string) => {
    setLogs([]); // Clear logs before execution
    captureLogs(() => {
      try {
        const result = eval(currentCode);
        if (typeof result === "object" && result !== null) {
          setOutput(JSON.stringify(result, null, 2));
        } else {
          setOutput(result.toString());
        }
      } catch (error) {
        if (error instanceof Error) {
          setOutput("Error: " + error.message);
        } else {
          setOutput("An unknown error occurred");
        }
      }
    });
  };
  const onChange = (newValue: string) => {
    setCode(newValue);
    if (renderNow) {
      executeCode(newValue);
    }
  };

  return (
    <div className="editorContainer">
      <h2 className="title">Live Code Editor</h2>
      <MonacoEditor
        height="200"
        language="javascript"
        theme={"vs-light"}
        value={code}
        options={editorOptions}
        onChange={onChange}
        className="editor"
      />
      {!renderNow && (
        <button onClick={() => executeCode(code)} className="renderButton">
          Run ▶️
        </button>
      )}
      <h2 className="outputTitle">Result</h2>
      <div className="output">{output}</div>
      <h2 className="logTitle">Console</h2>
      <div className="consoleLog">
        {logs.map((log, index) => (
          <div key={index} className="logMessage">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCode;
