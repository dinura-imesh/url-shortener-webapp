import React from "react";

export const Docs = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="border text-left p-4 m-4 box-border">
        <div className="text-lg font-medium text-green-500">POST</div>
        <div className="bg-slate-200 rounded-sm px-2 py-1 mt-2 text-sm">
          https://localhost:8000/url
        </div>
        <div className="mt-5 font-medium">Request</div>
        <div className="text-sm mt-1">Headers</div>
        <div className="text-sm mt-2 bg-slate-200 px-2 py-1">
          <pre>apikey: [your api key here]</pre>
        </div>
        <div className="text-sm mt-3">Body</div>
        <div className="text-sm mt-2 bg-slate-200 px-2 py-1">
          <pre>{JSON.stringify({ url: "https://google.com" }, null, 4)}</pre>
        </div>
        <div className="mt-5 font-medium">Response</div>
        <div className="text-sm mt-2 bg-slate-200 px-2 py-1">
          <pre>
            {JSON.stringify(
              {
                id: "L9KsSseTh",
                url: "https://nek.tk/L9KsSseTh",
              },
              null,
              4
            )}
          </pre>
        </div>
      </div>
      {/* Get Request */}
      <div className="border text-left p-4 m-4 box-border">
        <div className="text-lg font-medium text-green-500">GET</div>
        <div className="bg-slate-200 rounded-sm px-2 py-1 mt-2 text-sm">
          https://localhost:8000/url?id=
        </div>
        <div className="mt-5 font-medium">Request</div>
        <div className="text-sm mt-1">Query Params</div>
        <div className="text-sm mt-2 bg-slate-200 px-2 py-1">
          <pre>id=L9KsSseTh</pre>
        </div>
        <div className="mt-5 font-medium">Response</div>
        <div className="text-sm mt-2 bg-slate-200 px-2 py-1">
          <pre>
            {JSON.stringify(
              {
                url: "https:youtube.com?video=s9ox-1asd121soic",
              },
              null,
              4
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};
