package br.com.vnd.music.controller.form;

import br.com.vnd.music.model.Song;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode 
public class SongForm {
	private String name;
	private String composer;
	
	public Song toSong() {
		return new Song(null, name, composer);
	}
}
