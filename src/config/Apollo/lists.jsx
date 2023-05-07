import { gql } from "@apollo/client";

export const getListsQuery = gql`
	subscription getListsQuery {
		lists {
			id
			uuid
			nama
			tipeno
			lahir
			wafat
		}
	}
`;
export const deleteListsByIdMutation = gql`
	mutation deleteLists($id: Int!) {
		delete_lists_by_pk(id: $id) {
			id
		}
	}
`;

export const insertListsMutation = gql`
	mutation insertListsMutation(
		$nama: String!
		$tipeno: String!
		$lahir: String!
		$wafat: String!
	) {
		insert_lists_one(
			object: { nama: $nama, tipeno: $tipeno, lahir: $lahir, wafat: $wafat }
		) {
			nama
		}
	}
`;

export const getDetailListsByUuidQuery = gql`
	query getDetailListsByUuidQuery($uuid: uuid!) {
		lists(where: { uuid: { _eq: $uuid } }) {
			uuid
			id
			nama
			tipeno
			lahir
			wafat
		}
	}
`;

export const updateListsMutationbyUuidMutation = gql`
	mutation updateListsMutationbyUuidMutation(
		$uuid: uuid!
		$nama: String!
		$tipeno: String!
		$lahir: String!
		$wafat: String!
	) {
		update_lists(
			where: { uuid: { _eq: $uuid } }
			_set: { nama: $nama, tipeno: $tipeno, lahir: $lahir, wafat: $wafat }
		) {
			affected_rows
		}
	}
`;

export const getTipesQuery = gql`
	subscription getTipesQuery {
		tipes {
			id
			uuid
			namatipe
			luas
			kapasitas
			gambar
			deskripsi
			harga
		}
	}
`;
export const deleteTipesByIdMutation = gql`
	mutation deleteTipes($id: Int!) {
		delete_tipes_by_pk(id: $id) {
			id
		}
	}
`;

export const insertTipesMutation = gql`
	mutation insertTipesMutation(
		$namatipe: String!
		$luas: Int!
		$kapasitas: Int!
		$gambar: String!
		$deskripsi: String!
		$harga: Int!
	) {
		insert_tipes_one(
			object: {
				namatipe: $namatipe
				luas: $luas
				kapasitas: $kapasitas
				gambar: $gambar
				deskripsi: $deskripsi
				harga: $harga
			}
		) {
			namatipe
		}
	}
`;

export const getDetailTipesByUuidQuery = gql`
	query getDetailTipesByUuidQuery($uuid: uuid!) {
		tipes(where: { uuid: { _eq: $uuid } }) {
			uuid
			id
			namatipe
			luas
			kapasitas
			gambar
			deskripsi
			harga
		}
	}
`;

export const updateTipesMutationbyUuidMutation = gql`
	mutation updateTipesMutationbyUuidMutation(
		$uuid: uuid!
		$namatipe: String!
		$luas: Int!
		$kapasitas: Int!
		$deskripsi: String!
		$harga: Int!
	) {
		update_tipes(
			where: { uuid: { _eq: $uuid } }
			_set: {
				namatipe: $namatipe
				luas: $luas
				kapasitas: $kapasitas
				deskripsi: $deskripsi
				harga: $harga
			}
		) {
			affected_rows
		}
	}
`;
// export const getTipeMakamsQuery = gql`
// 	subscription getTipeMakamsQuery {
// 		tipemakams {
// 			id
// 			uuid
// 			namatipe
// 			luas
// 			kapasitas
// 			gambar
// 			deskripsi
// 			harga
// 		}
// 	}
// `;
// export const deleteTipeMakamsByIdMutation = gql`
// 	mutation deleteTipeMakams($id: Int!) {
// 		delete_tipemakams_by_pk(id: $id) {
// 			id
// 		}
// 	}
// `;

// export const insertTipeMakamsMutation = gql`
// 	mutation insertTipeMakamsMutation(
// 		$namatipe: String!
// 		$luas: Int!
// 		$kapasitas: Int!
// 		$gambar: Upload!
// 		$deskripsi: String!
// 		$harga: Int!
// 	) {
// 		insert_tipemakams_one(
// 			object: {
// 				namatipe: $namatipe
// 				luas: $luas
// 				kapasitas: $kapasitas
// 				gambar: $gambar
// 				deskripsi: $deskripsi
// 				harga: $harga
// 			}
// 		) {
// 			namatipe
// 		}
// 	}
// `;

// export const getDetailTipeMakamsByUuidQuery = gql`
// 	query getDetailTipeMakamsByUuidQuery($uuid: uuid!) {
// 		tipemakams(where: { uuid: { _eq: $uuid } }) {
// 			uuid
// 			id
// 			namatipe
// 			luas
// 			kapasitas
// 			gambar
// 			deskripsi
// 			harga
// 		}
// 	}
// `;

// export const updateTipeMakamsMutationbyUuidMutation = gql`
// 	mutation updateTipeMakamsMutationbyUuidMutation(
// 		$uuid: uuid!
// 		$namatipe: String!
// 		$luas: Int!
// 		$kapasitas: Int!
// 		$gambar: Upload!
// 		$deskripsi: String!
// 		$harga: Int!
// 	) {
// 		update_tipemakams(
// 			where: { uuid: { _eq: $uuid } }
// 			_set: {
// 				namatipe: $namatipe
// 				luas: $luas
// 				kapasitas: $kapasitas
// 				gamabr: $gambar
// 				deskripsi: $deskripsi
// 				harga: $harga
// 			}
// 		) {
// 			affected_rows
// 		}
// 	}
// `;
