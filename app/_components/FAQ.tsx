import CustomAccordion from "@/components/ui/CustomAccordion";
import { Faqs as questions } from "@/lib/constants";

const FAQ = () => {
    return (
        <section id="faq">
            <h2 className="font-bold text-3xl text-center">Frequently Asked Questions</h2>
            <div className="container shadow-md border my-8">
                {
                    questions.map((faq, index) => (
                        <CustomAccordion question={faq.question} answer={faq.answer} key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default FAQ;