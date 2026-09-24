"use client";

import { startTransition, useActionState, type FormEvent } from "react";

// Like useActionState, but submits via onSubmit instead of <form action>.
// React clears a <form action> after every submit, which would wipe what the
// user typed when we only want them to fix one field.
export function useLeadForm<State>(
  action: (state: Awaited<State>, formData: FormData) => Promise<State>,
  initialState: Awaited<State>
) {
  const [state, formAction, pending] = useActionState<State, FormData>(action, initialState);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  return { state, onSubmit, pending };
}
