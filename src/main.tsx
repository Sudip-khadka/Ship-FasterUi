import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NuqsAdapter } from 'nuqs/adapters/react'
import TableComp from './components/sanitizeEmail/tableComp.tsx'


const data = [
    { email: "user1@example.com", status: "Tag1", reason: "Reason 1", date: "2023-01-01" },
    { email: "user2@example.com", status: "Tag2", reason: "Reason 2", date: "2023-01-02" },
    { email: "user3@example.com", status: "Tag3", reason: "Reason 3", date: "2023-01-03" },
    { email: "user4@example.com", status: "Tag1", reason: "Reason 4", date: "2023-01-04" },
    { email: "user5@example.com", status: "Tag2", reason: "Reason 5", date: "2023-01-05" },
    { email: "user6@example.com", status: "Tag3", reason: "Reason 6", date: "2023-01-06" },
    { email: "user7@example.com", status: "Tag1", reason: "Reason 7", date: "2023-01-07" },
    { email: "user8@example.com", status: "Tag2", reason: "Reason 8", date: "2023-01-08" },
    { email: "user9@example.com", status: "Tag3", reason: "Reason 9", date: "2023-01-09" },
    { email: "user10@example.com", status: "Tag1", reason: "Reason 10", date: "2023-01-10" },
  ];
  


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <NuqsAdapter>
    <App />
    <div className="flex items-center justify-center p-50 h-screen">

    <TableComp data={data}/>
    </div>
     </NuqsAdapter>
  </StrictMode>,
)
