import Cocoa
import Vision

let args = CommandLine.arguments
if args.count < 2 { exit(1) }
let path = args[1]
guard let img = NSImage(contentsOfFile: path),
      let cgImage = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else { exit(1) }

let request = VNRecognizeTextRequest { (request, error) in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    let recognizedStrings = observations.compactMap { observation in
        return observation.topCandidates(1).first?.string
    }
    print(recognizedStrings.joined(separator: "\n"))
}
request.recognitionLevel = .accurate

let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try? handler.perform([request])
