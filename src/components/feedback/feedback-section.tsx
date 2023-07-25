import FeedbackList from "./feedback-list";

const FeedbackSection = () => {
  return (
    <section className="py-8">
      <header className="flex flex-col items-center justify-center space-y-5 text-center">
        <h2 className="font-semibold text-3xl md:text-4xl capitalize">
          What they think about our service
        </h2>
        <p className="text-gray">
          The following are the opinions of customers who have used and
          experienced our services
        </p>
      </header>
      <section className="mt-4">
        <FeedbackList />
      </section>
    </section>
  );
};

export default FeedbackSection;
