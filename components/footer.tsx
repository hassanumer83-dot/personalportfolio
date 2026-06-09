export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Umer Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
