export function Spinner(props: { text?: string }) {
  return (
    <div className="ui-flex ui-justify-center ui-items-center ui-space-x-2">
      <div
        className={`ui-w-6 ui-h-6 ui-border-gray-400 ui-border-2 ui-border-t-transparent ui-rounded-full ui-animate-spin`}
      ></div>
      <p className="">{props.text ?? "Loading"} ...</p>
    </div>
  );
}
