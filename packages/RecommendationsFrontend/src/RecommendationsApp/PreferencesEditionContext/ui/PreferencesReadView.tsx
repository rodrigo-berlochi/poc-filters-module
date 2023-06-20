import React from "react";
import { useTestAtom } from "../../_infrastructure/store";
import { Modal } from "@onlyfyio/oui";
import { PreferencesEditView } from "./PreferencesEditView";

const PreferencesReadView = () => {
  const [state, setState] = useTestAtom();
  return (
    <div style={{ padding: "2rem", backgroundColor: "InactiveCaptionText" }}>
      <h2>How do the onlyfy recommendations work? </h2>
      <br></br>
      <br></br>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {!state && "We are not showing the edition view"}
        {state && "Now showing it!!"}
        <button onClick={() => setState(!state)}>Edit recommendations</button>
        <button>Clear all</button>
      </div>
      <Modal open={state}>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body data-testid="modal-content">
            <Modal.Description>
              <PreferencesEditView />
            </Modal.Description>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Cancel
              data-testid="cancel-button"
              onClick={() => setState(!state)}
            >
              Cancel
            </Modal.Cancel>
            {/* this should actually be part of the edit view, since are required by it to work, and not coupled to the Modal */}
            <Modal.Action data-testid="accept-button">
              Confirm Selection
            </Modal.Action>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export { PreferencesReadView };
