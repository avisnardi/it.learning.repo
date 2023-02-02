package br.com.vnd.music.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.vnd.music.model.Song;
import br.com.vnd.music.repository.SongRepository;

@Service
public class SongService {

	@Autowired
	private SongRepository songRepository;
	
	public List<Song> list() {
		return songRepository.findAll();		
	}

	public Song save(Song song) {
		return songRepository.save(song);
	}
}
