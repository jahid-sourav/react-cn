import PageTitle from "@/components/custom/pageTitle/PageTitle";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <section className="py-6">
        <div className="template-container">
          <div className="text-center">
            <h2 className="mb-4">Home Page</h2>
            <Button>This Is A Button</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
