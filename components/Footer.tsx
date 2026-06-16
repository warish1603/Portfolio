import siteConfig from "@/site.config";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <p className="text-center text-sm text-muted">
          {siteConfig.footer.copy}
        </p>
      </div>
    </footer>
  );
}
