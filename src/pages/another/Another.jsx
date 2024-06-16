import PageTitle from "@/components/custom/pageTitle/PageTitle";
import { FaBeer } from "react-icons/fa";

function Another() {
  return (
    <div className="template-container py-6">
      <PageTitle title="Another" />
      <h2 className="flex items-center justify-center gap-x-1">
        Another Page <FaBeer className="text-green-600" />
      </h2>
    </div>
  );
}

export default Another;
