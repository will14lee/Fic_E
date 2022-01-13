class Chapter < ApplicationRecord
    belongs_to :story
    has_many :pages
end
