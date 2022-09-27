import React from 'react';

import styles from "./PatchnoteItem.module.css"

const PatchNoteItem = ({patch}) => {
	const {name, date, notes} = patch
	return (
		<div className={styles.Item}>
			<div className={styles.Group}>
				<span className={styles.Name}>{name}</span>
				<div>
					{notes.map((note) =>
						<div className={styles.Note}>
							<span className={styles[note.mark]}>{note.mark}</span>
							{note.endpoint &&
								<div className={styles[`EndpointContainer${note.endpoint.type}`]}>
									<span className={styles[`Type${note.endpoint.type}`]}>{note.endpoint.type}</span>
									<span className={styles[`Url${note.endpoint.type}`]}>{note.endpoint.url}</span>
								</div>
							}
							<span>{note.text}</span>
						</div>
					)}
				</div>
			</div>
			<span className={styles.Date}>{date}</span>
		</div>
	);
};

export default PatchNoteItem;