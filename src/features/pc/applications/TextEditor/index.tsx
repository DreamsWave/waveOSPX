import PxIcon from "@/components/PxIcon";

const TextEditor = () => {
  return (
    <>
      <h1>Text editor</h1>
      <PxIcon size="lg" icon={{ name: "text-editor" }} />
      <button type="button">Save</button>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        google
      </a>
    </>
  );
};

export default TextEditor;
