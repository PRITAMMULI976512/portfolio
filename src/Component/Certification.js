import React, { useRef } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import NAvbsr from "./NAvbsr";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import fullstackdeveloper from "./images/Full-Stack-Developer.png";
import MERN from "./images/MERN Stack Developer.png";

function Certification() {
  const pdfRef = useRef();
  const MERNref = useRef();

  const handleDownloadMERNPDF = async () => {
    const input = MERNref.current;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Full_Stack_Developer_Certificate.pdf");
  };
  const handleDownloadPDF = async () => {
    const input = pdfRef.current;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("MERN_Stack_Developer_Certificate.pdf");
  };

  return (
    <>
      <NAvbsr />
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="position-relative" ref={MERNref}>
              <Link
                to="https://success.simplilearn.com/75f3c9db-25b9-4f13-b035-39ca24ed7037#acc.5ZIwpGmx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MERN}
                  className="certificate_image img-fluid"
                  alt="MERN Certificate"
                />
              </Link>
              <FileDownloadIcon
                onClick={handleDownloadMERNPDF}
                className="download-icon"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#FFFFFF",
                  backgroundColor: "#1976D2",
                  borderRadius: "50%",
                  padding: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="position-relative" ref={pdfRef}>
              <img
                src={fullstackdeveloper}
                className="certificate_image img-fluid"
                alt="Full Stack Certificate"
              />
              <FileDownloadIcon
                onClick={handleDownloadPDF}
                className="download-icon"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#FFFFFF",
                  backgroundColor: "#1976D2",
                  borderRadius: "50%",
                  padding: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certification;
