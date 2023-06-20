"use client";

import { Header } from "ui";
import {
  RecommendationsList,
  PreferencesEdition,
} from "recommendations-frontend";

export default function Page() {
  return (
    <>
      <Header text="This is current Recos Frontend (white are would be current Recos frontend)" />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <RecommendationsList />
        </div>
        <div>
          <PreferencesEdition />
        </div>
      </div>
    </>
  );
}
