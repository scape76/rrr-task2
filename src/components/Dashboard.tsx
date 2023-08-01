import Summary from "./summary/NotesSummaryTable";
import ActiveNotesTable from "components/active/ActiveNotesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import ArchivedNotesTable from "components/archived/ArchivedNotesTable";
import { Header } from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header title="Notes" description="Manage your notes" className="my-4" />
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <ActiveNotesTable />
        </TabsContent>
        <TabsContent value="archived">
          <ArchivedNotesTable />
        </TabsContent>
      </Tabs>
      <Summary />
    </>
  );
};

export default Dashboard;
