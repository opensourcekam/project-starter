import * as React from 'react';
import { withToastManager } from 'react-toast-notifications';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import FeatherIcon from 'feather-icons-react';
import { blobToSrc } from '../../lib/blobToSrc';

export interface IUploadAvatarProps {
	handleFile: (data: any) => void;
	toastManager: any;
}

export interface IUploadAvatarState {
	preview: any;
}

class C extends React.Component<IUploadAvatarProps, IUploadAvatarState> {
	constructor(props: IUploadAvatarProps) {
		super(props);

		this.state = { preview: null };
	}

	renderUploadState(isDragActive: boolean, isDragReject: boolean) {
		let message = 'Drop or drag';

		if (isDragActive && !isDragReject) {
			message = "Drop it like it's hot!";
		} else if (isDragReject) {
			message = 'File type not allowed';
		}

		return (
			<div>
				<FeatherIcon icon="upload" />
				<p>{message}</p>
			</div>
		);
	}

	handleFile = async (file: any) => {
		const { toastManager } = this.props;

		if (!file[0]) {
			toastManager.add('File not allowed!', {
				appearance: 'error',
				autoDismiss: true
			});

			return;
		}

		const data = new FormData();

		// set preview
		data.append('file', file[0]);
		data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET as string);
		this.setPreview(file);

		// pass blob to parent
		this.props.handleFile(data);
	};

	setPreview(file: any) {
		// clear old file preview
		window.URL.revokeObjectURL(this.state.preview);

		// set new preview
		this.setState({ preview: blobToSrc(file[0]) });
	}

	public render() {
		return (
			<Dropzone accept="image/png, image/jpeg" minSize={0} maxSize={5e6} onDrop={(file) => this.handleFile(file)}>
				{({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
					return (
						<StyledUpload {...getRootProps()}>
							<input {...getInputProps()} />
							{this.state.preview ? (
								<img src={this.state.preview} />
							) : (
								this.renderUploadState(isDragActive, isDragReject)
							)}
						</StyledUpload>
					);
				}}
			</Dropzone>
		);
	}
}

const UploadAvatar = withToastManager(C);

export { UploadAvatar };

const StyledUpload = styled.div`
	border-radius: 4px;
	min-width: 250px;
	min-height: 250px;
	max-width: 250px;
	max-height: 250px;
	background-color: #eeeeee;
	margin: 3rem auto;
	border: 2px solid #e0e0e0;
	outline: none;
	position: relative;
	cursor: pointer;

	img {
		max-width: 250px;
		min-width: 250px;
		max-height: 250px;
		min-height: 250px;
		border-radius: 4px;
		transform: scale(1.05);
		transition: 0.3s ease-in-out;
	}

	div {
		position: absolute;
		top: 32.5%;
		left: 50%;
		transform: translate(-50%);
		text-align: center;

		p {
			text-transform: uppercase;
			letter-spacing: 1px;
			font-size: 0.8rem;
			margin-top: 1.5rem;
			opacity: 0.5;
		}
	}

	svg {
		height: 3rem;
		width: 3rem;
		stroke: #9e9e9e;
		opacity: 0.5;
	}
`;
