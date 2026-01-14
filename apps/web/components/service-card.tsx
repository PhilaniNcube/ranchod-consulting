"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ServiceCard({
  service,
}: {
  service: { title: string; description: string };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-brand">{service.title}</h3>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-brand" />
          ) : (
            <ChevronDown className="w-6 h-6 text-brand" />
          )}
        </div>
        <div
          className={`prose prose-slate max-w-none transition-all duration-300 ${
            isExpanded ? "bg-slate-50 p-6 rounded-lg" : "bg-white"
          }`}
        >
          <p
            className={`text-slate-700 leading-relaxed text-lg ${
              !isExpanded ? "line-clamp-1" : ""
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
