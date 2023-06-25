import * as I from 'admin/assets';

import * as S from './style';

interface FileCardProps {
  fileName: string;
  onCancel: (fileName: string) => void;
}

const FileCard: React.FC<FileCardProps> = ({ fileName, onCancel }) => (
  <S.FileCardWrap>
    <S.FileNameWrapper>
      <I.FileIcon />
      <S.Filename>{fileName}</S.Filename>
    </S.FileNameWrapper>
    <S.CancelButton type='button' onClick={() => onCancel(fileName)}>
      <I.CancelIcon />
    </S.CancelButton>
  </S.FileCardWrap>
);

export default FileCard;
