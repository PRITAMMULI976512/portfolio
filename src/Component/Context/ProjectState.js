import React from "react";
import ProjectContate from "./ProjectContate";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ProjectState(props) {
  const resumeRef = useRef();
  const [pdfPassword, setPdfPassword] = useState("");

  const handleDownload = async () => {
    if (!pdfPassword) {
      alert("Please set a password for the PDF!");
      return;
    }

    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Create PDF with encryption
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      encryption: {
        userPassword: pdfPassword,
        ownerPassword: pdfPassword, // or a different one if you want
        userPermissions: ["print", "modify", "copy", "annot-forms"],
      },
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    console.log(pageWidth, pageHeight);

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    console.log(imgWidth, imgHeight);
    let position = 0;

    if (imgHeight > pageHeight) {
      let heightLeft = imgHeight;
      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) {
          pdf.addPage();
          position = 0;
        }
      }
    } else {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("Pritam_Muli_Resume_Secure.pdf");
  };

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
    <ProjectContate.Provider
      value={{
        pdfPassword,
        setPdfPassword,
        handleDownload,
        resumeRef,
        pdfRef,
        MERNref,
        handleDownloadMERNPDF,
        handleDownloadPDF,
      }}
    >
      {props.children}
    </ProjectContate.Provider>
  );
}

export default ProjectState;
