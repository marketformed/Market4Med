import { DEPLOY_ZIP_BASE64 } from '../data/deployZipBase64';
import { SOURCE_ZIP_BASE64 } from '../data/sourceZipBase64';

export function downloadBase64Zip(base64Data: string, filename: string) {
  try {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/zip' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return true;
  } catch (err) {
    console.error('Download error:', err);
    return false;
  }
}

export function downloadDeployZip() {
  return downloadBase64Zip(DEPLOY_ZIP_BASE64, 'market4med-ready-to-deploy.zip');
}

export function downloadSourceZip() {
  return downloadBase64Zip(SOURCE_ZIP_BASE64, 'market4med-source-code.zip');
}
