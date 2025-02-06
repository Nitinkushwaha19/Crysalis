import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

// Importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Timeline from "./components/Timeline"; // Assuming Timeline is a component
import EventsPage from "./pages/EventsPage";
import InvitationCard from "./components/InvitationCard";
import { ReduxProvider } from "./hooks/isPhone";
import Members from "./pages/Members";
import Winners from "./pages/Winners";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { pathname } = useLocation();
    const isHome = pathname == "/";
    return (
        <div className={`min-h-screen bg-black flex flex-col`}>
            {/* Header that is always visible */}
            <Header />

            {/* Main Content that changes based on the route */}
            <main
                className={`bg-[url(/assets/${
                    isHome ? "globe.png" : "bg-2.jpg"
                })] bg-cover`}
            >
                {children}
                <Footer />
            </main>

            {/* Footer that is always visible */}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            {/* Define Routes */}
            <Routes>
                {/* Home route (renders both HeroSection and Timeline) */}
                <Route
                    path="/"
                    element={
                        <ReduxProvider>
                            <Layout>
                                <HeroSection />
                                <InvitationCard />
                                <Timeline />
                                {/* Add Timeline here on the home page */}
                            </Layout>
                        </ReduxProvider>
                    }
                />

                {/* Timeline route */}
                <Route
                    path="/timeline"
                    element={
                        <Layout>
                            <Timeline />
                        </Layout>
                    }
                />
                {/* Timeline route */}
                <Route
                    path="/winners"
                    element={
                        <Layout>
                            <Winners />
                        </Layout>
                    }
                />
                {/* Events route */}
                <Route
                    path="/events"
                    element={
                        <Layout>
                            <EventsPage />
                        </Layout>
                    }
                />
                {/* Members route */}
                <Route
                    path="/members"
                    element={
                        <Layout>
                            <Members />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
