import React from "react";

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithMultipleChildren {
  children: React.ReactNode[];
}

export interface WithMultipleOrOneChildren {
  children: React.ReactNode[] | React.ReactNode;
}
