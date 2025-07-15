// MIGRATE FORM OVER HEREE
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Form = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    level: "",
    year: "",
    subject: [],
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, multiple, options } = e.target;

    if (multiple) {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData((prev) => ({
        ...prev,
        [name]: selectedValues,
      }));
    } else {
      setFormData((prev) => {
        const newFormData = { ...prev, [name]: value };

        // If user is changing 'level' or 'year', reset subject
        if (name === "level" || name === "year") {
          newFormData.subject = [];
        }

        return newFormData;
      });
    }
  };

  const handleSubmit = (e) => {
    const timestamp = new Date().toISOString();
    e.preventDefault();

    if (formData.subject.length === 0) {
      alert("Please select at least one subject.");
      return;
    }

    const payload = {
      ...formData,
      subject: formData.subject.join(", "), // ✅ convert array to string
      Timestamp: timestamp,
    };

    fetch(
      "https://api.sheetbest.com/sheets/d5b7626c-177f-49d6-af96-96ed8c69da11",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setShowPopup(true);
        console.log(data);
        setFormData({
          name: "",
          email: "",
          number: "",
          level: "",
          year: "",
          subject: [],
        });
      })
      .catch((err) => {
        console.error("Error submitting form", err);
      });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      subject: checked
        ? [...prev.subject, value] // Add if checked
        : prev.subject.filter((item) => item !== value), // Remove if unchecked
    }));
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Thank you!
            </h2>
            <p className="text-gray-700 mb-6">
              We will be in touch with you within 1–2 days.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-blue-700 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={60000000}
            max={99999999}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Level
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select level</option>
            <option value="Secondary">Secondary</option>
            <option value="JC">Junior College</option>
            <option value="IB">IB</option>
          </select>
        </div>

        {/* This is for the LEVEL */}

        {formData.level === "Secondary" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Year of Study (Secondary)
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select year</option>
              <option value="Sec 1">Secondary 1</option>
              <option value="Sec 2">Secondary 2</option>
              <option value="Sec 3">Secondary 3</option>
              <option value="Sec 4">Secondary 4</option>
              <option value="Sec 5">Secondary 5</option>
            </select>
          </div>
        )}

        {formData.level === "JC" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Year of Study (JC)
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select year</option>
              <option value="JC 1">JC 1</option>
              <option value="JC 2">JC 2</option>
            </select>
          </div>
        )}

        {formData.level === "IB" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Year of Study (IB)
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border border-blue-700 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select year</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
              <option value="Year 5">Year 5</option>
              <option value="Year 6">Year 6</option>
            </select>
          </div>
        )}

        {/* Subjects */}
        {formData.level === "Secondary" &&
          (formData.year === "Sec 3" ||
            formData.year === "Sec 4" ||
            formData.year === "Sec 5") && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Subject (Upper Secondary)
              </label>
              <div className="space-y-2 text-black text-left">
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 E Math"
                    checked={formData.subject.includes("G2 E Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Elementary Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 E Math"
                    checked={formData.subject.includes("G3 E Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Elementary Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 A Math"
                    checked={formData.subject.includes("G2 A Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Additional Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 A Math"
                    checked={formData.subject.includes("G3 A Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Additional Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 Combined Biology"
                    checked={formData.subject.includes("G2 Combined Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Combined Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 Combined Biology"
                    checked={formData.subject.includes("G3 Combined Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Combined Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 Combined Chemistry"
                    checked={formData.subject.includes("G2 Combined Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Combined Chemistry
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 Combined Chemistry"
                    checked={formData.subject.includes("G3 Combined Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Combined Chemistry
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 Pure Biology"
                    checked={formData.subject.includes("G3 Pure Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Pure Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 Pure Chemistry"
                    checked={formData.subject.includes("G3 Pure Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Pure Chemistry
                </label>
              </div>
            </div>
          )}

        {formData.level === "Secondary" &&
          (formData.year === "Sec 1" || formData.year === "Sec 2") && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Subject (Lower Secondary)
              </label>
              <div className="space-y-2 text-black text-left">
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 E Math"
                    checked={formData.subject.includes("G2 E Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Elementary Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 E Math"
                    checked={formData.subject.includes("G3 E Math")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Elementary Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G2 Science"
                    checked={formData.subject.includes("G2 Science")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G2 Science
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="G3 Science"
                    checked={formData.subject.includes("G3 Science")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  G3 Science
                </label>
              </div>
            </div>
          )}

        {formData.level === "JC" && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Subject (JC)
            </label>
            <div className="space-y-2 text-black text-left">
              <label className="block">
                <input
                  type="checkbox"
                  value="H1 Biology"
                  checked={formData.subject.includes("H1 Biology")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H1 Biology
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  value="H2 Biology"
                  checked={formData.subject.includes("H2 Biology")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H2 Biology
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  value="H1 Chemistry"
                  checked={formData.subject.includes("H1 Chemistry")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H1 Chemistry
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  value="H2 Chemistry"
                  checked={formData.subject.includes("H2 Chemistry")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H2 Chemistry
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  value="H1 Mathematics"
                  checked={formData.subject.includes("H1 Mathematics")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H1 Mathematics
              </label>
              <label className="block">
                <input
                  type="checkbox"
                  value="H2 Mathematics"
                  checked={formData.subject.includes("H2 Mathematics")}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                H2 Mathematics
              </label>
            </div>
          </div>
        )}

        {formData.level === "IB" &&
          (formData.year === "Year 1" ||
            formData.year === "Year 2" ||
            formData.year === "Year 3" ||
            formData.year === "Year 4") && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Subject (IB, Y1-4)
              </label>
              <div className="space-y-2 text-black text-left">
                <label className="block">
                  <input
                    type="checkbox"
                    value="Biology"
                    checked={formData.subject.includes("Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Chemistry"
                    checked={formData.subject.includes("Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Chemistry
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Mathematics"
                    checked={formData.subject.includes("Mathematics")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Additional Mathematics"
                    checked={formData.subject.includes(
                      "Additional Mathematics"
                    )}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  Additional Mathematics
                </label>
              </div>
            </div>
          )}

        {formData.level === "IB" &&
          (formData.year === "Year 5" || formData.year === "Year 6") && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Subject (IB, Y5-6)
              </label>
              <div className="space-y-2 text-black text-left">
                <label className="block">
                  <input
                    type="checkbox"
                    value="HL Biology"
                    checked={formData.subject.includes("HL Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  HL Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="SL Biology"
                    checked={formData.subject.includes("SL Biology")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  SL Biology
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="HL Chemistry"
                    checked={formData.subject.includes("HL Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  HL Chemistry
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="SL Chemistry"
                    checked={formData.subject.includes("SL Chemistry")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  SL Chemistry
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="AA HL Mathematics"
                    checked={formData.subject.includes("AA HL Mathematics")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  AA HL Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="AA SL Mathematics"
                    checked={formData.subject.includes("AA SL Mathematics")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  AA SL Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="AI SL Mathematics"
                    checked={formData.subject.includes("AI SL Mathematics")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  AI SL Mathematics
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="AI HL Mathematics"
                    checked={formData.subject.includes("AI HL Mathematics")}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  AI HL Mathematics
                </label>
              </div>
            </div>
          )}

        <button
          type="submit"
          className="animated-gradient-bg text-white rounded-2xl 
          px-10 py-2 text-center shadow-xl 
          hover:bg-white hover:text-black 
          mx-auto transition-all duration-200 hover:scale-110 hover:drop-shadow-md
          transition-colors cursor-pointer"
        >
          <span className="text-xl md:text-xl font-bold tracking-tight leading-snug">
            Submit
          </span>
        </button>
      </form>
    </>
  );
};

export default Form;
