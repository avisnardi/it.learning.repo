package br.com.vnd.music.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Repository;

import br.com.vnd.music.model.Song;

@Repository
public interface SongRepository extends org.springframework.data.repository.Repository<Song, UUID> {

	public List<Song> findAll();
	public Song save(Song song);
}
