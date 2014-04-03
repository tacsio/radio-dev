require 'singleton'

class Radio
  include Singleton

  attr_accessor :playlist
  attr_accessor :current
  attr_accessor :default

  def initialize(playlist = [])
    @playlist = playlist
  end

  def next
    @current = @playlist.shift
  end

  def add(url)
    music = parse_youtube_url(url) if url
    puts music
    @playlist << music
    music
  end

  private
  def parse_youtube_url(url)
   regex = /(?:.be\/|\/watch\?v=|\/(?=p\/))([\w\/\-]+)/
   url.match(regex)[1]
  end
end

