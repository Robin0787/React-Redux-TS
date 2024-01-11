/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

export type TTodoProviderProps = {
  children: ReactNode;
};

export type TTodoContextValues = {
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
};

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TAction = {
  type: string;
  payload: TTodo;
};
