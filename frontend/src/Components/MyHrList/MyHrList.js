import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./MyHrList.css";
import { fetchmyHRList } from "../../api/fetchMyHRlist";
import MyHrTableRow from "./MyHrTableRow";
import { sendHRinfo } from "../../api/updateHrInfo";
import { ShimmerTable } from "react-shimmer-effects";

const MyHrList = () => {
  const [myHrData, setMyHrData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    async function getmyHRList() {
      try {
        setIsLoading(true);
        const storedMyHrData = localStorage.getItem("myHrData");
        if (storedMyHrData) {
          setMyHrData(JSON.parse(storedMyHrData));
        } else {
          const data = await fetchmyHRList();
          setMyHrData(data);
          localStorage.setItem("myHrData", JSON.stringify(data));
        }
      } catch (err) {
        setError("Failed to load My HR list");
      } finally {
        setIsLoading(false);
      }
    }
    getmyHRList();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      setMyHrData((prevHrData) =>
        prevHrData.map((hr) => (hr.id === id ? { ...hr, status } : hr))
      );
      const response = await sendHRinfo({ id, status });
      console.log("response ", response.status);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredData =
    statusFilter === "All"
      ? myHrData
      : myHrData.filter((hr) => hr.status === statusFilter);

  return (
    <div className="projects-section">
      <div className="projects-section-header">
        <p>My HR List</p>
        <div className="view-actions">
          <label htmlFor="status" className="mr-2">
            Status:
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={handleFilterChange}
            className="status-dropdown"
          >
            <option value="All">All</option>
            <option value="Contact">Contact</option>
            <option value="Do_not_Contact">Do not Contact</option>
            <option value="Already_Contacted">Already Contacted</option>
          </select>
        </div>
      </div>
      {error && <p className="text-center py-4 text-red-500">{error}</p>}
      {isLoading ? (
        <ShimmerTable row={6} col={5} className="shimmer-table-effect" />
      ) : (
        <div className="myhr-table-container overflow-auto">
          <table className="myhr-table">
            <thead>
              <tr>
                <th>HR Name</th>
                <th>Company Name</th>
                <th>Last Contacted</th>
                <th>Next Contact Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No HRs found
                  </td>
                </tr>
              ) : (
                filteredData.map((hr) => (
                  <MyHrTableRow
                    key={hr.id}
                    hr={hr}
                    handleStatusChange={handleStatusChange}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyHrList;
