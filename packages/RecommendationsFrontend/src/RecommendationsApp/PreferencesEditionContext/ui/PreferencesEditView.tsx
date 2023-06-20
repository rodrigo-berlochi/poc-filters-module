import React from "react";

const PreferencesEditView = () => {
  return (
    <div style={{ backgroundColor: "aquamarine", padding: 12 }}>
      <span>Edit recommendations preferences</span>
      <span>
        This is a component independent of the modal. We now consume it inside a
        modal, tomorrow we can use it without a modal.
      </span>
    </div>
  );
};

export { PreferencesEditView };
