// import React, { useState } from 'react';
// import { Search, Eye, Download } from 'lucide-react';
// import '../css/clientdocsign.css';

// const TABS = [
//   { key: 'drafts', label: 'Drafts', count: 2 },
//   { key: 'waiting', label: 'Waiting to Sign', count: 2 },
//   { key: 'signed', label: 'Signed', count: 0 },
//   { key: 'approved', label: 'Approved/Declined', count: 2 },
// ];

// const DOCUMENTS = [
//   {
//     id: 1,
//     name: 'Document1.pdf',
//     type: 'Financial Statement',
//     fy: '2025',
//     signedBy: '-',
//     signedOn: '-',
//     status: 'drafts',
//     url: '/documents/Document1.pdf' // Add URL to your PDF
//   },
//   {
//     id: 2,
//     name: 'Document2.pdf',
//     type: 'Tax Return',
//     fy: '2025',
//     signedBy: '-',
//     signedOn: '-',
//     status: 'drafts',
//     url: '/documents/Document2.pdf' // Add URL to your PDF
//   },
// ];

// const DocumentManager = () => {
//   const [search, setSearch] = useState('');
//   const [activeTab, setActiveTab] = useState('drafts');
//   const [viewingPdf, setViewingPdf] = useState(null);

//   const filteredDocs = DOCUMENTS.filter(
//     (doc) =>
//       doc.status === activeTab &&
//       (doc.name.toLowerCase().includes(search.toLowerCase()) ||
//         doc.type.toLowerCase().includes(search.toLowerCase()))
//   );

//   const handleViewPdf = (pdfUrl) => {
//     // Open PDF in a new tab
//     window.open(pdfUrl, '_blank');
    
//     // Or use the modal approach (uncomment below and comment the line above)
//     // setViewingPdf(pdfUrl);
//   };

//   const handleDownloadPdf = (pdfUrl, pdfName) => {
//     // Create a temporary anchor element to trigger download
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = pdfName || 'document.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="container">
//       {/* Search */}
//         <div className="search-container">
//         <div className="search-input-wrapper">
//             <Search className="search-icon" size={16} />
//             <input
//             type="text"
//             placeholder="Search Documents"
//             className="search-input"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             />
//         </div>
//         </div>


//       {/* Tabs */}
//       <div className="tabs-container">
//         {TABS.map(({ key, label, count }) => (
//           <button
//             key={key}
//             className={`tab ${activeTab === key ? 'active' : ''}`}
//             onClick={() => setActiveTab(key)}
//           >
//             {label} ({count})
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <div className="table-container">
//         <table className="table">
//           <thead>
//             <tr className="header-row">
//               <th className="header-cell">Document</th>
//               <th className="header-cell">Type</th>
//               <th className="header-cell">FY</th>
//               <th className="header-cell">Signed By</th>
//               <th className="header-cell">Signed On</th>
//               <th className="header-cell">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredDocs.length > 0 ? (
//               filteredDocs.map(({ id, name, type, fy, signedBy, signedOn, url }) => (
//                 <tr key={id} className="data-row">
//                   <td className="data-cell">
//                     <div className="document-name">
//                       <span className="file-icon">📄</span>
//                       {name}
//                     </div>
//                   </td>
//                   <td className="data-cell">{type}</td>
//                   <td className="data-cell">{fy}</td>
//                   <td className="data-cell">{signedBy}</td>
//                   <td className="data-cell">{signedOn}</td>
//                   <td className="data-cell">
//                     <div className="actions-container">
//                       <button 
//                         className="action-button" 
//                         title="View"
//                         onClick={() => handleViewPdf(url)}
//                       >
//                         <Eye size={16} />
//                       </button>
//                       <button 
//                         className="action-button" 
//                         title="Download"
//                         onClick={() => handleDownloadPdf(url, name)}
//                       >
//                         <Download size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="empty-state">No documents found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* PDF Viewer Modal (optional) */}
//       {viewingPdf && (
//         <div className="pdf-modal">
//           <div className="pdf-modal-content">
//             <button 
//               className="pdf-modal-close"
//               onClick={() => setViewingPdf(null)}
//             >
//               ×
//             </button>
//             <iframe 
//               src={viewingPdf}
//               title="PDF Viewer"
//               className="pdf-iframe"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentManager;