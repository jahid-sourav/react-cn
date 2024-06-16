import PageTitle from "@/components/custom/pageTitle/PageTitle";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="template-container py-6">
      <PageTitle title="Home" />
      <div className="text-center">
        <h2 className="mb-4">Home Page</h2>
        <Button>This Is A Button</Button>
      </div>
    </div>
  );
}

export default Home;
