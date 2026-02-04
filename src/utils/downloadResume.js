export default async function downloadResume() {
  const resumeUrl = import.meta.env.VITE_RESUME_URL;
  const res = await fetch(resumeUrl);
  const blob = await res.blob();

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ShokhjahonAkhmedov_Resume.pdf";
  a.click();
}
