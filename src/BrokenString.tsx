import * as React from "react";

interface BrokenStringProps {
  text: string;
}

const breakString = (s: string) =>
  s.split("").map((c: string, i: number) => <li key={i}>{c}</li>);

export function BrokenString({ text }: BrokenStringProps) {
  return <ul>{breakString(text)}</ul>;
}
