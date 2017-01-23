package album

//IAlbumRepository Interface for UT mocking
type IAlbumRepository interface {
	GetAlbums() Albums
	AddAlbum(album Album) bool
	UpdateAlbum(album Album) bool
	DeleteAlbum(id string) string
}
