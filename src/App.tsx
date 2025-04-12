
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import PersonalPage from "./pages/PersonalPage";
import ProcessPage from "./pages/ProcessPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
