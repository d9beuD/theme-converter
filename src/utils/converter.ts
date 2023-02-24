export function extractTextFromITerm2ThemeFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target) {
        resolve(event.target.result as string)
      } else {
        reject(new Error('Could not read file'))
      }
    }
    reader.readAsText(file)
  })
}
