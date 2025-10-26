import { useState, useEffect, useRef } from "react";

import { useOpenAiGlobal } from "../utils/use-openai-global";
import { useWidgetState } from "../utils/use-widget-state";

export default function App() {
  const [widgetState, setWidgetState] = useWidgetState();
  
  const toolInput = useOpenAiGlobal("toolInput");
  const userAgent = useOpenAiGlobal("userAgent");
  const locale = useOpenAiGlobal("locale");

  return (
    <div className="antialiased w-full h-[320px] text-black px-4 border border-black/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white relative flex items-center justify-center">
      <div className="text-center">
        <div className="text-xl text-gray-600 mb-6">
          <strong>widgetState:</strong> { JSON.stringify(widgetState) }
        </div>
        <div className="text-xl text-gray-600 mb-6">
          <strong>toolInput:</strong> { JSON.stringify(toolInput) }
        </div>
        <div className="text-xl text-gray-600 mb-6">
          <strong>userAgent:</strong> { JSON.stringify(userAgent) }
        </div>
        <div className="text-xl text-gray-600 mb-6">
          <strong>locale:</strong> { JSON.stringify(locale) }
        </div>
      </div>
    </div>
  );
}