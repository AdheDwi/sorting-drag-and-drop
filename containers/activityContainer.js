import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import EmptyImage from "../public/activity-empty-state.svg";

const ActivityContainer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="content-wrap" data-cy="activity-page">
      <div className="container">
        <div className="sub-header">
          <h1 className="title-page" data-cy="activity-title">
            Activity
          </h1>
          <button
            className={`btn btn-big btn-cyan btn-rounded ${
              loading ? "btn-loading" : ""
            }`}
            disabled={loading}
            onClick={() => setLoading(true)}
            data-cy="button-add-activity"
          >
            {loading ? (
              "Proses..."
            ) : (
              <>
                <span className="me-2">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Tambah
              </>
            )}
          </button>
        </div>
        <div className="content-body">
          <div className="empty-state">
            <Image
              src={EmptyImage}
              alt={EmptyImage}
              data-cy={`image-${EmptyImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityContainer;
