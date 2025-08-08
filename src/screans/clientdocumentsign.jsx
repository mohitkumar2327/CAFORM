
///-----------------------V2-----------------------///

// import React, { useState, useEffect, useMemo } from 'react';
// import { Search, Eye, Download, ArrowLeft } from 'lucide-react';
// import '../css/clientdocsign.css';
// import Headdocsign from '../components/headdocsign.jsx';

// // Document data - in a real app, this would come from an API
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
//     url: '/documents/Document1.pdf' 
//   },
//   {
//     id: 2,
//     name: 'Document2.pdf',
//     type: 'Tax Return',
//     fy: '2025',
//     signedBy: '-',
//     signedOn: '-',
//     status: 'drafts',
//     url: '/documents/Document2.pdf' 
//   },
//   {
//     id: 3,
//     name: 'Document1.pdf',
//     type: 'Legal',
//     fy: '2024',
//     signedBy: 'John Doe',
//     signedOn: '2024-01-15',
//     status: 'waiting',
//     url: '/documents/Contract.pdf'
//   },
//   {
//     id: 4,
//     name: 'Document2.pdf',
//     type: 'Tax Return',
//     fy: '2024',
//     signedBy: 'John Doe',
//     signedOn: '2024-01-15',
//     status: 'waiting',
//     url: '/documents/Contract.pdf'
//   },
//   {
//     id: 5,
//     name: 'Document1.pdf',
//     type: 'Legal',
//     fy: '2024',
//     signedBy: 'Jane Smith',
//     signedOn: '2024-02-20',
//     status: 'approved',
//     url: '/documents/Agreement.pdf'
//   },
//   {
//     id: 6,
//     name: 'Document2.pdf',
//     type: 'Financial Statement',
//     fy: '2024',
//     signedBy: 'Mike Johnson',
//     signedOn: '2024-03-10',
//     status: 'approved',
//     url: '/documents/Report.pdf'
//   }
// ];

// const Documentsign = () => {
//   const [search, setSearch] = useState('');
//   const [activeTab, setActiveTab] = useState('drafts');
//   const [viewingPdf, setViewingPdf] = useState(null); // Now stores the document object
//   const [documents, setDocuments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Calculate tab counts dynamically
//   const tabCounts = useMemo(() => {
//     const counts = {};
//     TABS.forEach(tab => {
//       counts[tab.key] = documents.filter(doc => doc.status === tab.key).length;
//     });
//     return counts;
//   }, [documents]);

//   // Simulate API fetch on component mount
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setDocuments(DOCUMENTS);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   // Memoize filtered documents
//   const filteredDocs = useMemo(() => {
//     return documents.filter(
//       (doc) =>
//         doc.status === activeTab &&
//         (doc.name.toLowerCase().includes(search.toLowerCase()) ||
//           doc.type.toLowerCase().includes(search.toLowerCase()))
//     );
//   }, [documents, activeTab, search]);

//   const handleViewPdf = (doc) => {
//     setViewingPdf(doc); // Store the entire document object
//   };

//   const handleBackToList = () => {
//     setViewingPdf(null); // Return to document list
//   };

//   const handleDownloadPdf = (pdfUrl, pdfName) => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = pdfName || 'document.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   if (error) {
//     return <div className="error-message">Error loading documents: {error}</div>;
//   }

//   return (
//     <>
//       <Headdocsign />
//       <div className="container">
        
//         {/* Top Bar for Search Input */}
//         <div className="top-bar">
//           <div className="search-input-wrapper">
//             <Search className="search-icon" size={16} />
//             <input
//               type="text"
//               placeholder="Search Documents"
//               className="search-input"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Conditional Rendering: Show PDF Viewer or Tabs + Table */}
//         {viewingPdf ? (
//           // PDF Viewer Section (replaces tabs and table)
//           <div className="pdf-viewer-section">
//             {/* PDF Viewer Header with Back Button */}
//             <div className="pdf-viewer-header">
//               <button className="back-button" onClick={handleBackToList}>
//                 <ArrowLeft size={16} />
//                 Back to Documents
//               </button>
//               <div className="pdf-info">
//                 <span className="pdf-title">{viewingPdf.name}</span>
//                 <span className="pdf-separator">•</span>
//                 <span className="pdf-type">{viewingPdf.type}</span>
//                 <span className="pdf-separator">•</span>
//                 <span className="pdf-fy">FY {viewingPdf.fy}</span>
//               </div>
//               <button 
//                 className="download-button"
//                 onClick={() => handleDownloadPdf(viewingPdf.url, viewingPdf.name)}
//               >
//                 <Download size={16} />
//                 Download
//               </button>
//             </div>
            
//             {/* PDF Iframe */}
//             <div className="pdf-viewer-container">
//               <iframe
//                 src={viewingPdf.url}
//                 title="PDF Viewer"
//                 className="pdf-viewer-iframe"
//                 frameBorder="0"
//               />
//             </div>
//           </div>
//         ) : (
//           // Document List Section (tabs + table)
//           <>
//             {/* Tabs Navigation */}
//             <div className="tabs-container">
//               {TABS.map(({ key, label }) => (
//                 <button
//                   key={key}
//                   className={`tab ${activeTab === key ? 'active' : ''}`}
//                   onClick={() => setActiveTab(key)}
//                 >
//                   {label} ({tabCounts[key] || 0})
//                 </button>
//               ))}
//             </div>

//             {/* Documents Table or Loading State */}
//             {isLoading ? (
//               <div className="loading-message">Loading documents...</div>
//             ) : (
//               <div className="table-container">
//                 <table className="table">
//                   <thead>
//                     <tr className="header-row">
//                       <th className="header-cell">Document</th>
//                       <th className="header-cell">Type</th>
//                       <th className="header-cell">FY</th>
//                       <th className="header-cell">Signed By</th>
//                       <th className="header-cell">Signed On</th>
//                       <th className="header-cell">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredDocs.length > 0 ? (
//                       filteredDocs.map((doc) => (
//                         <tr key={doc.id} className="data-row">
//                           <td className="data-cell">
//                             <div className="document-name">
//                               <span className="file-icon">📄</span>
//                               {doc.name}
//                             </div>
//                           </td>
//                           <td className="data-cell">{doc.type}</td>
//                           <td className="data-cell">{doc.fy}</td>
//                           <td className="data-cell">{doc.signedBy}</td>
//                           <td className="data-cell">{doc.signedOn}</td>
//                           <td className="data-cell">
//                             <div className="actions-container">
//                               <button
//                                 className="action-button"
//                                 title="View"
//                                 onClick={() => handleViewPdf(doc)}
//                               >
//                                 <Eye size={16} />
//                               </button>
//                               <button
//                                 className="action-button"
//                                 title="Download"
//                                 onClick={() => handleDownloadPdf(doc.url, doc.name)}
//                               >
//                                 <Download size={16} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="6" className="empty-state">
//                           No documents found
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Documentsign;

///-------------------------V3------------------------///

// import React, { useState, useEffect, useMemo } from 'react';
// import { Search, Eye, Download, ArrowLeft, Upload, Plus } from 'lucide-react';
// import '../css/clientdocsign.css';
// import Headdocsign from '../components/headdocsign.jsx';

// // Document data - in a real app, this would come from an API
// const TABS = [
//   { key: 'drafts', label: 'Drafts', count: 2 },
//   { key: 'waiting', label: 'Waiting to Sign', count: 2 },
//   { key: 'signed', label: 'Signed', count: 0 },
//   { key: 'approved', label: 'Approved/Declined', count: 2 },
// ];

// const INITIAL_DOCUMENTS = [
//   {
//     id: 1,
//     name: 'Document1.pdf',
//     type: 'Financial Statement',
//     fy: '2025',
//     signedBy: '-',
//     signedOn: '-',
//     status: 'drafts',
//     url: '/documents/doc1.pdf' 
//   },
//   {
//     id: 2,
//     name: 'Document2.pdf',
//     type: 'Tax Return',
//     fy: '2025',
//     signedBy: '-',
//     signedOn: '-',
//     status: 'drafts',
//     url: '/documents/Document2.pdf' 
//   },
//   {
//     id: 3,
//     name: 'Contract.pdf',
//     type: 'Legal',
//     fy: '2024',
//     signedBy: 'John Doe',
//     signedOn: '2024-01-15',
//     status: 'waiting',
//     url: '/documents/Contract.pdf'
//   },
//   {
//     id: 4,
//     name: 'Agreement.pdf',
//     type: 'Tax Return',
//     fy: '2024',
//     signedBy: 'John Doe',
//     signedOn: '2024-01-15',
//     status: 'waiting',
//     url: '/documents/Agreement.pdf'
//   },
//   {
//     id: 5,
//     name: 'Report.pdf',
//     type: 'Legal',
//     fy: '2024',
//     signedBy: 'Jane Smith',
//     signedOn: '2024-02-20',
//     status: 'approved',
//     url: '/documents/Report.pdf'
//   },
//   {
//     id: 6,
//     name: 'Financial-Report.pdf',
//     type: 'Financial Statement',
//     fy: '2024',
//     signedBy: 'Mike Johnson',
//     signedOn: '2024-03-10',
//     status: 'approved',
//     url: '/documents/Financial-Report.pdf'
//   }
// ];

// const Documentsign = () => {
//   const [search, setSearch] = useState('');
//   const [activeTab, setActiveTab] = useState('drafts');
//   const [viewingPdf, setViewingPdf] = useState(null);
//   const [documents, setDocuments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showUploadModal, setShowUploadModal] = useState(false);

//   // Calculate tab counts dynamically
//   const tabCounts = useMemo(() => {
//     const counts = {};
//     TABS.forEach(tab => {
//       counts[tab.key] = documents.filter(doc => doc.status === tab.key).length;
//     });
//     return counts;
//   }, [documents]);

//   // Simulate API fetch on component mount
//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setDocuments(INITIAL_DOCUMENTS);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   // Memoize filtered documents
//   const filteredDocs = useMemo(() => {
//     return documents.filter(
//       (doc) =>
//         doc.status === activeTab &&
//         (doc.name.toLowerCase().includes(search.toLowerCase()) ||
//           doc.type.toLowerCase().includes(search.toLowerCase()))
//     );
//   }, [documents, activeTab, search]);

//   const handleViewPdf = (doc) => {
//     setViewingPdf(doc);
//   };

//   const handleBackToList = () => {
//     setViewingPdf(null);
//   };

//   const handleDownloadPdf = (pdfUrl, pdfName) => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = pdfName || 'document.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === 'application/pdf') {
//       // Create object URL for the uploaded file
//       const fileUrl = URL.createObjectURL(file);
      
//       // Create new document object
//       const newDocument = {
//         id: Date.now(), // Simple ID generation
//         name: file.name,
//         type: 'Uploaded Document', // You can make this configurable
//         fy: new Date().getFullYear().toString(),
//         signedBy: '-',
//         signedOn: '-',
//         status: activeTab, // Add to current active tab
//         url: fileUrl
//       };

//       // Add to documents array
//       setDocuments(prev => [...prev, newDocument]);
//       setShowUploadModal(false);
      
//       // Clear the input
//       event.target.value = '';
//     } else {
//       alert('Please select a PDF file');
//     }
//   };

//   if (error) {
//     return <div className="error-message">Error loading documents: {error}</div>;
//   }

//   return (
//     <>
//       <Headdocsign />
//       <div className="container">
        
//         {/* Top Bar for Search Input */}
//         <div className="top-bar">
//           <div className="search-input-wrapper">
//             <Search className="search-icon" size={16} />
//             <input
//               type="text"
//               placeholder="Search Documents"
//               className="search-input"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           {/* Upload Button */}
//           {!viewingPdf && (
//             <button 
//               className="upload-button"
//               onClick={() => setShowUploadModal(true)}
//             >
//               <Plus size={16} />
//               Add Document
//             </button>
//           )}
//         </div>

//         {/* Conditional Rendering: Show PDF Viewer or Tabs + Table */}
//         {viewingPdf ? (
//           // PDF Viewer Section
//           <div className="pdf-viewer-section">
//             <div className="pdf-viewer-header">
//               <button className="back-button" onClick={handleBackToList}>
//                 <ArrowLeft size={16} />
//                 Back to Documents
//               </button>
//               <div className="pdf-info">
//                 <span className="pdf-title">{viewingPdf.name}</span>
//                 <span className="pdf-separator">•</span>
//                 <span className="pdf-type">{viewingPdf.type}</span>
//                 <span className="pdf-separator">•</span>
//                 <span className="pdf-fy">FY {viewingPdf.fy}</span>
//               </div>
//               <button 
//                 className="download-button"
//                 onClick={() => handleDownloadPdf(viewingPdf.url, viewingPdf.name)}
//               >
//                 <Download size={16} />
//                 Download
//               </button>
//             </div>
            
//             <div className="pdf-viewer-container">
//               <iframe
//                 src={viewingPdf.url}
//                 title="PDF Viewer"
//                 className="pdf-viewer-iframe"
//                 frameBorder="0"
//               />
//             </div>
//           </div>
//         ) : (
//           // Document List Section
//           <>
//             <div className="tabs-container">
//               {TABS.map(({ key, label }) => (
//                 <button
//                   key={key}
//                   className={`tab ${activeTab === key ? 'active' : ''}`}
//                   onClick={() => setActiveTab(key)}
//                 >
//                   {label} ({tabCounts[key] || 0})
//                 </button>
//               ))}
//             </div>

//             {isLoading ? (
//               <div className="loading-message">Loading documents...</div>
//             ) : (
//               <div className="table-container">
//                 <table className="table">
//                   <thead>
//                     <tr className="header-row">
//                       <th className="header-cell">Document</th>
//                       <th className="header-cell">Type</th>
//                       <th className="header-cell">FY</th>
//                       <th className="header-cell">Signed By</th>
//                       <th className="header-cell">Signed On</th>
//                       <th className="header-cell">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredDocs.length > 0 ? (
//                       filteredDocs.map((doc) => (
//                         <tr key={doc.id} className="data-row">
//                           <td className="data-cell">
//                             <div className="document-name">
//                               <span className="file-icon">📄</span>
//                               {doc.name}
//                             </div>
//                           </td>
//                           <td className="data-cell">{doc.type}</td>
//                           <td className="data-cell">{doc.fy}</td>
//                           <td className="data-cell">{doc.signedBy}</td>
//                           <td className="data-cell">{doc.signedOn}</td>
//                           <td className="data-cell">
//                             <div className="actions-container">
//                               <button
//                                 className="action-button"
//                                 title="View"
//                                 onClick={() => handleViewPdf(doc)}
//                               >
//                                 <Eye size={16} />
//                               </button>
//                               <button
//                                 className="action-button"
//                                 title="Download"
//                                 onClick={() => handleDownloadPdf(doc.url, doc.name)}
//                               >
//                                 <Download size={16} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="6" className="empty-state">
//                           No documents found
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </>
//         )}

//         {/* Upload Modal */}
//         {showUploadModal && (
//           <div className="upload-modal-overlay" onClick={() => setShowUploadModal(false)}>
//             <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
//               <h3>Upload PDF Document</h3>
//               <div className="upload-area">
//                 <Upload size={48} />
//                 <p>Click to select a PDF file</p>
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleFileUpload}
//                   className="file-input"
//                 />
//               </div>
//               <button 
//                 className="cancel-button"
//                 onClick={() => setShowUploadModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Documentsign;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Eye, Download, ArrowLeft, Upload, Plus } from 'lucide-react';
import { Drawer } from 'antd';
import '../css/clientdocsign.css';
import Headdocsign from '../components/headdocsign.jsx';

// Document data - Updated with placeholder/demo URLs
const TABS = [
  { key: 'drafts', label: 'Drafts', count: 2 },
  { key: 'waiting', label: 'Waiting to Sign', count: 2 },
  { key: 'signed', label: 'Signed', count: 0 },
  { key: 'approved', label: 'Approved/Declined', count: 2 },
];

const INITIAL_DOCUMENTS = [
  {
    id: 1,
    name: 'Document1.pdf',
    type: 'Financial Statement',
    fy: '2025',
    signedBy: '-',
    signedOn: '-',
    status: 'drafts',
    // Using a sample PDF URL for demonstration
    url: '/public/documents/doc1.pdf'
  },
  {
    id: 2,
    name: 'Document2.pdf',
    type: 'Tax Return',
    fy: '2025',
    signedBy: '-',
    signedOn: '-',
    status: 'drafts',
    // Using another sample PDF URL
    url: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf'
  },
  {
    id: 3,
    name: 'Contract.pdf',
    type: 'Legal',
    fy: '2024',
    signedBy: 'John Doe',
    signedOn: '2024-01-15',
    status: 'waiting',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 4,
    name: 'Agreement.pdf',
    type: 'Tax Return',
    fy: '2024',
    signedBy: 'John Doe',
    signedOn: '2024-01-15',
    status: 'waiting',
    url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
  },
  {
    id: 5,
    name: 'Report.pdf',
    type: 'Legal',
    fy: '2024',
    signedBy: 'Jane Smith',
    signedOn: '2024-02-20',
    status: 'approved',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: 6,
    name: 'Financial-Report.pdf',
    type: 'Financial Statement',
    fy: '2024',
    signedBy: 'Mike Johnson',
    signedOn: '2024-03-10',
    status: 'approved',
    url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
  }
];

const Documentsign = () => {
  // State variables for component functionality
  const [search, setSearch] = useState(''); // Search input value
  const [activeTab, setActiveTab] = useState('drafts'); // Currently active tab
  const [viewingPdf, setViewingPdf] = useState(null); // Currently viewing PDF document
  const [documents, setDocuments] = useState([]); // Array of all documents
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  // const [showUploadModal, setShowUploadModal] = useState(false); // Upload modal visibility - COMMENTED OUT
  const [pdfError, setPdfError] = useState(false); // PDF loading error state
  
  // Drawer states for PDF viewing
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer visibility
  const [drawerLoading, setDrawerLoading] = useState(false); // Drawer loading state

  // Calculate tab counts dynamically based on document status
  const tabCounts = useMemo(() => {
    const counts = {};
    TABS.forEach(tab => {
      counts[tab.key] = documents.filter(doc => doc.status === tab.key).length;
    });
    return counts;
  }, [documents]);

  // Simulate API fetch on component mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setDocuments(INITIAL_DOCUMENTS);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Memoize filtered documents based on active tab and search query
  const filteredDocs = useMemo(() => {
    return documents.filter(
      (doc) =>
        doc.status === activeTab &&
        (doc.name.toLowerCase().includes(search.toLowerCase()) ||
          doc.type.toLowerCase().includes(search.toLowerCase()))
    );
  }, [documents, activeTab, search]);

  // Handle PDF viewing in drawer
  const handleViewPdf = (doc) => {
    setPdfError(false);
    setViewingPdf(doc);
    setDrawerOpen(true);
    setDrawerLoading(true);
    
    // Simulate loading time for PDF
    setTimeout(() => {
      setDrawerLoading(false);
    }, 1500);
  };

  // Handle closing drawer
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setViewingPdf(null);
    setPdfError(false);
  };

  // Handle PDF download
  const handleDownloadPdf = (pdfUrl, pdfName) => {
    // For demo URLs, open in new tab instead of downloading
    if (pdfUrl.includes('w3.org') || pdfUrl.includes('mozilla.github.io')) {
      window.open(pdfUrl, '_blank');
      return;
    }

    // Original download logic for actual files
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  // Display error message if there's an error
  if (error) {
    return <div className="error-message">Error loading documents: {error}</div>;
  }

  return (
    <>
      <Headdocsign />
      <div className="container">
        
        {/* Top Bar for Search Input */}
        <div className="top-bar">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search Documents"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Conditional Rendering: Show Tabs + Table (PDF now opens in drawer) */}
        <div className="tabs-container">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              className={`tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label} ({tabCounts[key] || 0})
            </button>
          ))}
        </div>

        {/* Document Table */}
        {isLoading ? (
          <div className="loading-message">Loading documents...</div>
        ) : (
          <div className="table-container">
            <table className="table">
              {/* Table Header */}
              <thead>
                <tr className="header-row">
                  <th className="header-cell">Document</th>
                  <th className="header-cell">Type</th>
                  <th className="header-cell">FY</th>
                  <th className="header-cell">Signed By</th>
                  <th className="header-cell">Signed On</th>
                  <th className="header-cell">Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="data-row">
                      <td className="data-cell">
                        <div className="document-name">
                          <span className="file-icon">📄</span>
                          {doc.name}
                        </div>
                      </td>
                      <td className="data-cell">{doc.type}</td>
                      <td className="data-cell">{doc.fy}</td>
                      <td className="data-cell">{doc.signedBy}</td>
                      <td className="data-cell">{doc.signedOn}</td>
                      <td className="data-cell">
                        <div className="actions-container">
                          {/* View PDF Button - Opens in Drawer */}
                          <button
                            className="action-button"
                            title="View"
                            onClick={() => handleViewPdf(doc)}
                          >
                            <Eye size={16} />
                          </button>
                          {/* Download PDF Button */}
                          <button
                            className="action-button"
                            title="Download"
                            onClick={() => handleDownloadPdf(doc.url, doc.name)}
                          >
                            <Download size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  // Empty state when no documents found
                  <tr>
                    <td colSpan="6" className="empty-state">
                      No documents found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* PDF Viewer Drawer */}
        <Drawer
          title={
            viewingPdf ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>{viewingPdf.name}</span>
                <span style={{ color: '#666' }}>•</span>
                <span style={{ color: '#666', fontSize: '14px' }}>{viewingPdf.type}</span>
                <span style={{ color: '#666' }}>•</span>
                <span style={{ color: '#666', fontSize: '14px' }}>FY {viewingPdf.fy}</span>
              </div>
            ) : (
              'Loading PDF...'
            )
          }
          placement="right"
          width="60%"
          open={drawerOpen}
          loading={drawerLoading}
          onClose={handleCloseDrawer}
          closable
          destroyOnHidden
          extra={
            viewingPdf && (
              <button 
                className="download-button"
                onClick={() => handleDownloadPdf(viewingPdf.url, viewingPdf.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#1890ff',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <Download size={16} />
                Download
              </button>
            )
          }
        >
          {viewingPdf && !drawerLoading && (
            <div style={{ height: '100%', width: '100%' }}>
              {pdfError ? (
                // Error message when PDF fails to load
                <div style={{ 
                  padding: '20px', 
                  textAlign: 'center',
                  backgroundColor: '#fff2f0',
                  border: '1px solid #ffccc7',
                  borderRadius: '6px'
                }}>
                  <p style={{ color: '#ff4d4f', fontWeight: '500', marginBottom: '16px' }}>
                    Unable to load PDF. This might be due to:
                  </p>
                  <ul style={{ 
                    textAlign: 'left', 
                    color: '#666', 
                    marginBottom: '16px',
                    paddingLeft: '20px'
                  }}>
                    <li>File not found at the specified location</li>
                    <li>CORS restrictions</li>
                    <li>PDF format issues</li>
                  </ul>
                  <button 
                    onClick={() => window.open(viewingPdf.url, '_blank')}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #1890ff',
                      borderRadius: '4px',
                      backgroundColor: 'white',
                      color: '#1890ff',
                      cursor: 'pointer'
                    }}
                  >
                    Open in New Tab
                  </button>
                </div>
              ) : (
                // PDF iframe viewer
                <iframe
                  src={viewingPdf.url}
                  title="PDF Viewer"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  onError={handlePdfError}
                  onLoad={(e) => {
                    // Check if iframe loaded successfully
                    try {
                      const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
                      if (!iframeDoc || iframeDoc.body.innerHTML.includes('404') || iframeDoc.body.innerHTML.includes('Not Found')) {
                        handlePdfError();
                      }
                    } catch (error) {
                      // // CORS or other errors - this is normal for cross-origin content
                      console.log('PDF loaded (cross-origin)');
                      setError(error.message); // The error state is updated here 
                      setIsLoading(false);
                    }
                  }}
                />
              )}
            </div>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default Documentsign;