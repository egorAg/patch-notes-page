import React from 'react';
import PatchNoteItem from "../PatchNoteItem/PatchNoteItem";
import {patchNotesMock} from "../../mock/patchNotes.mock";

import styles from "./PatchNotes.module.css"

const PatchNotes = () => {

	return (
		<div className={styles.Container}>
			{patchNotesMock.map((patch) => <PatchNoteItem patch={patch} />)}
		</div>
	);
}

export default PatchNotes;