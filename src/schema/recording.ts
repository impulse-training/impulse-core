// We have plans to promote this to a first class document type, but for now, this type is just
// nested in other documents, such as tactics or logs.
export interface Recording {
  // uid: string;
  localFilePath: string;
  remoteFilePath: string;
  waveform?: string; // We generate an svg representation of the wave form from the audio file
}
