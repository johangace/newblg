import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Books = () => (
    <Layout>
        <SEO title="Books" />
        <section id="404" className="container" style={{ minHeight: "600px" }}>
            <div className="section-title">
                <SectionTitle title="404" />
                <p class="text-primary">
                    Books
                </p>
            </div>
        </section>
    </Layout>
);

export default Books;
