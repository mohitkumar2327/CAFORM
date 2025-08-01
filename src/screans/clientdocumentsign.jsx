import React, { useState, useEffect, useMemo } from 'react';
import { Search, Eye, Download } from 'lucide-react';
import '../css/clientdocsign.css';
import Headdocsign from '../components/headdocsign.jsx';

// Document data - in a real app, this would come from an API
const TABS = [
  { key: 'drafts', label: 'Drafts', count: 2 },
  { key: 'waiting', label: 'Waiting to Sign', count: 2 },
  { key: 'signed', label: 'Signed', count: 0 },
  { key: 'approved', label: 'Approved/Declined', count: 2 },
];

const DOCUMENTS = [
  {
    id: 1,
    name: 'Document1.pdf',
    type: 'Financial Statement',
    fy: '2025',
    signedBy: '-',
    signedOn: '-',
    status: 'drafts',
    url: '/documents/Document1.pdf' 
  },
  {
    id: 2,
    name: 'Document2.pdf',
    type: 'Tax Return',
    fy: '2025',
    signedBy: '-',
    signedOn: '-',
    status: 'drafts',
    url: '/documents/Document2.pdf' 
  },
  {
    id: 3,
    name: 'Document1.pdf',
    type: 'Legal',
    fy: '2024',
    signedBy: 'John Doe',
    signedOn: '2024-01-15',
    status: 'waiting',
    url: '/documents/Contract.pdf'
  },
  {
    id: 4,
    name: 'Document2.pdf',
    type: 'Tax Return',
    fy: '2024',
    signedBy: 'John Doe',
    signedOn: '2024-01-15',
    status: 'waiting',
    url: '/documents/Contract.pdf'
  },
  {
    id: 5,
    name: 'Document1.pdf',
    type: 'Legal',
    fy: '2024',
    signedBy: 'Jane Smith',
    signedOn: '2024-02-20',
    status: 'approved',
    url: '/documents/Agreement.pdf'
  },
  {
    id: 6,
    name: 'Document2.pdf',
    type: 'Financial Statement',
    fy: '2024',
    signedBy: 'Mike Johnson',
    signedOn: '2024-03-10',
    status: 'approved',
    url: '/documents/Report.pdf'
  }
];

const Documentsign = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('drafts');
  const [viewingPdf, setViewingPdf] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate tab counts dynamically
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
        await new Promise(resolve => setTimeout(resolve, 500));
        setDocuments(DOCUMENTS);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Memoize filtered documents
  const filteredDocs = useMemo(() => {
    return documents.filter(
      (doc) =>
        doc.status === activeTab &&
        (doc.name.toLowerCase().includes(search.toLowerCase()) ||
          doc.type.toLowerCase().includes(search.toLowerCase()))
    );
  }, [documents, activeTab, search]);

  const handleViewPdf = (pdfUrl) => {
    setViewingPdf(pdfUrl);
  };

  const handleDownloadPdf = (pdfUrl, pdfName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* Tabs Navigation */}
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

        {/* Documents Table or Loading State */}
        {isLoading ? (
          <div className="loading-message">Loading documents...</div>
        ) : (
          <div className="table-container">
            <table className="table">
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
                          <button
                            className="action-button"
                            title="View"
                            onClick={() => handleViewPdf(doc.url)}
                          >
                            <Eye size={16} />
                          </button>
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

        {/* PDF Viewer Modal */}
        {viewingPdf && (
          <div className="pdf-modal-overlay" onClick={() => setViewingPdf(null)}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="pdf-modal-close"
                onClick={() => setViewingPdf(null)}
              >
                ×
              </button>
              <iframe
                src={viewingPdf}
                title="PDF Viewer"
                className="pdf-iframe"
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Documentsign;