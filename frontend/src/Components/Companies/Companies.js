import React, { useState, useEffect } from "react";
import { fetchComingCompanyDetails } from "../../api/comingCompany";
import CompanyDetails from "./CompanyDetails";
import AddCompanyForm from "./AddCompanyForm";
import { FaSearch, FaPlus } from "react-icons/fa";
import { timeanddate } from "../../utils/timeanddate";
import { addNewCompany } from "../../api/addNewCompany";
import Shimmer from "./Shimmer";
import CompanyCard from "./CompanyCard";

function CompaniesDashboard() {
  return (
    <>
      <Company />
    </>
  );
}

function Company() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [comingCompanies, setComingCompanies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getComingCompanies() {
      setIsLoading(true);
      try {
        const storedCompanies = localStorage.getItem("comingCompanies");
        if (storedCompanies) {
          setComingCompanies(JSON.parse(storedCompanies));
        } else {
          const data = await fetchComingCompanyDetails();

          setComingCompanies(data);
          localStorage.setItem("comingCompanies", JSON.stringify(data));
        }
      } catch (err) {
        setError("Failed to load Upcoming Companies");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getComingCompanies();
  }, []);

  const handleBack = () => {
    setSelectedCompany(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveCompany = async (newCompany) => {
    try {
      const response = await addNewCompany(newCompany);

      if (response.status === 201) {
        setComingCompanies([...comingCompanies, newCompany]);
        localStorage.setItem(
          "comingCompanies",
          JSON.stringify([...comingCompanies, newCompany])
        );
        setIsModalOpen(false);
      } else {
        console.error("Failed to add the company.");
      }
    } catch (err) {
      console.error("Error adding the company", err);
    }
  };

  const filteredCompanies = comingCompanies.filter(
    (company) =>
      company &&
      company.company_id &&
      company.company_id.name &&
      company.company_id.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentDate = new Date();
  const formattedDate = timeanddate(currentDate);

  return (
    <>
      <div className="projects-section">
        <div className="projects-section-header">
          <p>Companies</p>
          <p className="time">{formattedDate}</p>
        </div>
        <div className="projects-section-line">
          <div className="view-actions flex justify-between items-center w-full">
            <div className="flex flex-col sm:flex-row  items-center ml-auto">
              <div className="flex items-center justify-center m-4">
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="border rounded-l px-2 py-1 w-64"
                />
                <button
                  className="bg-black text-white px-3.5 py-2.5 rounded-r hover:bg-gray-500"
                  onClick={() =>
                    handleSearch({ target: { value: searchTerm } })
                  }
                >
                  <FaSearch />
                </button>
              </div>
              <button
                className="bg-black text-white px-3 py-1 hover:bg-gray-500 rounded flex items-center sm:ml-4"
                onClick={handleAddClick}
              >
                <FaPlus className="mr-1" /> Add
              </button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Shimmer />
        ) : error ? (
          <div className="text-center py-4 text-red-500">{error}</div>
        ) : (
          <>
            <div className="project-boxes jsGridView">
              {selectedCompany ? (
                <div className="w-full">
                  <CompanyDetails
                    comingCompany={selectedCompany}
                    onBack={handleBack}
                  />
                </div>
              ) : (
                <div className="project-box-wrapper grid lg:grid-flow-col grid-flow-row gap-9">
                  {filteredCompanies.map((company) => (
                    <CompanyCard
                      key={company.id}
                      comingCompany={company}
                      onClick={setSelectedCompany}
                      isActive={
                        selectedCompany && selectedCompany.id === company.id
                      }
                      className="w-full"
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <AddCompanyForm onClose={handleModalClose} onSave={handleSaveCompany} />
      )}
    </>
  );
}

export default CompaniesDashboard;
