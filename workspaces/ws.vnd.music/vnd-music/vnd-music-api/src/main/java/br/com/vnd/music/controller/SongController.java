package br.com.vnd.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.vnd.music.controller.form.SongForm;
import br.com.vnd.music.model.Song;
import br.com.vnd.music.service.SongService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/song")
public class SongController {
	
	@Autowired
	private SongService songService;
	
	@GetMapping
	public List<Song> list() {
		System.out.println("1>");
		return songService.list();		
	}

	@PostMapping
	public Song insert(@RequestBody SongForm songForm) {
		return songService.save(songForm.toSong());		
	}
}
