import ActivityOverview from "@/components/dashbord/ActivityOverview";
import MainActions from "@/components/dashbord/MainActions";
import WelcomeSection from "@/components/dashbord/WelcomeSection";
import Navbar from "@/components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </>
  );
}
export default DashboardPage;
