require 'singleton'

class Radio
  include Singleton

  attr_accessor :playlist
  attr_accessor :current
  attr_accessor :default

  def initialize(playlist = [])
    @playlist = playlist
    @default = 'kxopViU98Xo' #Sax Guy! hu3hu3
  end

  def next
    @playlist << @default unless @current #When the queue is empty
    @current = @playlist.shift
  end

  def add(url)
    music = parse_youtube_url(url)
    @playlist << music unless @playlist.include? music
  end

  def queue_size
    @playlist.size
  end

  def show_playlist
    puts "playlist :"
    @playlist.each do |m|
      puts "> #{m}"
    end
  end

  private
  def parse_youtube_url(url)
   regex = /(?:.be\/|\/watch\?v=|\/(?=p\/))([\w\/\-]+)/
   url.match(regex)[1]
  end
end

